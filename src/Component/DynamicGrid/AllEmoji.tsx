import React, { useEffect, useState } from 'react';
import './AllEmoji.css';

interface EmojiItem {
  emoji: string;
  description: string;
}

const AllEmoji: React.FC = () => {
  const [emojis, setEmojis] = useState<EmojiItem[]>([]);

  useEffect(() => {
    // Fetch emoji data from a remote XML source
    fetch('https://raw.githubusercontent.com/unicode-org/cldr/main/common/annotations/en.xml')
      .then(response => response.text())
      .then(data => {
        // Parse XML data
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, 'text/xml');
        const emojiNodes = xmlDoc.querySelectorAll('annotation');

        // Extract emoji data including description
        const emojiList: EmojiItem[] = [];
        emojiNodes.forEach(node => {
          const emojiText = node.getAttribute('cp');
          const description = node.textContent || 'No description available';

          if (emojiText) {
            emojiList.push({ emoji: emojiText, description });
          }
        });

        setEmojis(emojiList);
      })
      .catch(error => console.error('Error fetching emoji data:', error));
  }, []);

  return (
    <div className="App">
      <h1>Emoji Gallery</h1>
      <table className="emoji-table">
        <thead>
          <tr>
            <th>Emoji</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {emojis.map((item, index) => (
            <tr key={index}>
              <td>{item.emoji}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllEmoji;
