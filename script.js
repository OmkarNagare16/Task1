function showProfile(member) {
  const profileInfo = document.getElementById("profile-info");

  const profiles = {
    member1: {
      name: "John Doe",
      role: "Lead Developer",
      bio: "John has over 10 years of experience in software development.",
    },
    member2: {
      name: "Jane Smith",
      role: "UX/UI Designer",
      bio: "Jane is passionate about creating intuitive and beautiful designs.",
    },
    member3: {
      name: "Emily Johnson",
      role: "Project Manager",
      bio: "Emily ensures projects are delivered on time and meet client expectations.",
    },
  };

  const selectedProfile = profiles[member];

  if (selectedProfile) {
    profileInfo.innerHTML = `<strong>Name:</strong> ${selectedProfile.name}<br>
                                 <strong>Role:</strong> ${selectedProfile.role}<br>
                                 <strong>Bio:</strong> ${selectedProfile.bio}`;
  }
}
