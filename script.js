
const jobs = [
  {
    id: 1,
    company: "Mobile First Corp",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description: "Build cross-platform mobile apps using React Native.",
    status: "none"
  },

  {
    id: 2,
    company: "WebFlow Agency",
    position: "Web Designer & Developer",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$80,000 - $120,000",
    description: "Create stunning web experiences for high-profile clients.",
    status: "none"
  },
  {
    id: 3,
    company: "DataViz Solutions",
    position: "Data Visualization Specialist",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$125,000 - $165,000",
    description: "Transform complex data into compelling dashboards.",
    status: "none"
  },
  {
    id: 4,
    company: "CloudFirst Inc",
    position: "Backend Developer",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$140,000 - $190,000",
    description: "Develop scalable backend services using Python.",
    status: "none"
  },
  {
    id: 5,
    company: "Innovation Labs",
    position: "UI/UX Engineer",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$110,000 - $150,000",
    description: "Design and build intuitive user interfaces.",
    status: "none"
  },
  {
    id: 6,
    company: "MegaCorp Solutions",
    position: "JavaScript Developer",
    location: "New York, NY",
    type: "Full-time",
    salary: "$130,000 - $170,000",
    description: "Build enterprise web apps using modern frameworks.",
    status: "none"
  },
  {
    id: 7,
    company: "StartupXYZ",
    position: "Full Stack Engineer",
    location: "Remote",
    type: "Full-time",
    salary: "$120,000 - $160,000",
    description: "Work on fast-growing startup platform.",
    status: "none"
  },
  {
    id: 8,
    company: "TechCorp Industries",
    position: "Senior Frontend Developer",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$150,000 - $175,000",
    description: "Develop scalable frontend apps using React.",
    status: "none"
  }
   
];

 let currentTab = "all";

function renderJobs() {
  const container = document.getElementById("jobsContainer");
  container.innerHTML = "";

  let filtered = jobs;

  if (currentTab !== "all") {
    filtered = jobs.filter(job => job.status === currentTab);
  }

  document.getElementById("tabCount").innerText = filtered.length + " jobs";

  if (filtered.length === 0) {
    document.getElementById("noJobs").classList.remove("hidden");
    return;
  } else {
    document.getElementById("noJobs").classList.add("hidden");
  }

  filtered.forEach(job => {
    const div = document.createElement("div");
    div.className = "bg-white p-4 rounded shadow";

    div.innerHTML = `
      <div class="flex justify-between">
        <div>
          <h3 class="font-bold">${job.company}</h3>
          <p class="text-sm text-gray-500">${job.position}</p>
          <p class="text-xs text-gray-400">${job.location}; ${job.type}; ${job.salary}</p>
        </div>
        <button onclick="deleteJob(${job.id})" class="text-gray-400 hover:text-red-500"><i class="fa-regular fa-trash-can"></i></button>
      </div>
      <p class="text-sm mt-2">${job.description}</p>
      <div class="flex gap-2 mt-3">
        <button onclick="toggleStatus(${job.id}, 'interview')" 
          class="px-3 py-1 text-sm rounded border ${job.status==='interview' ? 'bg-green-500 text-white' : 'border-green-500 text-green-600'}">
          Interview
        </button>

        <button onclick="toggleStatus(${job.id}, 'rejected')" 
          class="px-3 py-1 text-sm rounded border ${job.status==='rejected' ? 'bg-red-500 text-white' : 'border-red-500 text-red-600'}">
          Rejected
        </button>
      </div>
    `;

    container.appendChild(div);
  });
  updateDashboard();
}

renderJobs();