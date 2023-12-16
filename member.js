// member.js

/**
 * Get the skills of a member.
 * @param {Object} member - The member object containing skills information.
 * @returns {Array} An array of skills for the member.
 */
function skillsMember(member) {
    if (!member || !member.skills || !Array.isArray(member.skills)) {
      console.error("Invalid member object or skills array");
      return [];
    }
  
    return member.skills;
  }
  
  // Example usage:
  const sampleMember = {
    name: "John Doe",
    skills: ["JavaScript", "React", "Node.js"],
  };
  
  const memberSkills = skillsMember(sampleMember);
  console.log(`${sampleMember.name}'s skills:`, memberSkills);  