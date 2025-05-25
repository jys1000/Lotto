import React, { useState } from "react";
import { motion } from "framer-motion";

const filteredCombinations = [
  [3, 12, 19, 26, 33, 41],
  [4, 11, 17, 25, 36, 44],
  [7, 13, 22, 29, 34, 42],
  [5, 14, 20, 27, 38, 43],
  [6, 15, 21, 28, 35, 45],
];

function getRandomCombinations(n = 5) {
  const shuffled = [...filteredCombinations].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}

export default function LottoGenerator() {
  const [results, setResults] = useState([]);

  const handleGenerate = () => {
    const combos = getRandomCombinations();
    setResults(combos);
  };

  return (
    <div style={{ maxWidth: '480px', margin: '0 auto', padding: '2rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>전략 로또 번호 생성기</h1>
      <button onClick={handleGenerate} style={{ padding: '0.5rem 1rem', fontSize: '1rem', marginBottom: '2rem' }}>
        번호 뽑기!
      </button>
      <div style={{ display: 'grid', gap: '1rem' }}>
        {results.map((combo, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div style={{ padding: '1rem', backgroundColor: '#f0f0f0', borderRadius: '12px', fontSize: '1.2rem' }}>
              {combo.join(", ")}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}