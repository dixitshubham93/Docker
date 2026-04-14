const form = document.getElementById("userForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const isAllowed = document.querySelector('input[name="isAllowed"]:checked')?.value;

  const skills = [];
  document.querySelectorAll('input[name="skills"]:checked')
    .forEach((skill) => {
      skills.push(skill.value);
    });

  console.log({ email, password, isAllowed, skills });

  try {
    const res = await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password, isAllowed, skills })
    });

    const data = await res.json();
    console.log("Response:", data);

  } catch (err) {
    console.error("Error:", err);
  }
});




