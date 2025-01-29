import { useState } from 'react';
import Item from './Item';

export default function PackingList({ items, onRemoveItem, onToggleItems, onClearItems }) {
  const [sortBy, setSortBy] = useState('input');
  let sortedItems = [];

  if (sortBy === 'description') {
    sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
  } else if (sortBy === 'packed') {
    sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
  } else {
    sortedItems = items;
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item key={item.id} item={item} removeItem={onRemoveItem} onToggleItems={onToggleItems} />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearItems}>Clear list</button>
      </div>
    </div>
  );
}
