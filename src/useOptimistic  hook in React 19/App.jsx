import { useState, useOptimistic } from "react";

export default function App() {
  const [skills, setSkills] = useState(["HTML", "CSS"]);

  const [optimisticSkills, addOptimisticSkill] = useOptimistic(
    skills,
    (currentSkills, newSkill) => [...currentSkills, newSkill]
  );

  const [skill, setSkill] = useState("");

  const addSkill = async () => {
    if (!skill.trim()) return;

    // UI instantly update
    addOptimisticSkill(skill);

    // Fake API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Actual state update after API success
    setSkills((prev) => [...prev, skill]);

    setSkill("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>useOptimistic  hook in React 19</h1> 

      <input
        type="text"
        value={skill}
        placeholder="Enter Skill"
        onChange={(e) => setSkill(e.target.value)}
      />

      <button onClick={addSkill}>Add Skill</button>

      <h2>Skills List</h2>

      <ul>
        {optimisticSkills.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
