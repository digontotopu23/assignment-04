
const jobs = [
    {
        id: 1,
        company: "Mobile First Corp",
        position: "React Native Developer",
        location: "Remote",
        type: "Full-time",
        salary: "$130,000 - $175,000",
        description: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
        status: "none"
    },

    {
        id: 2,
        company: "WebFlow Agency",
        position: "Web Designer & Developer",
        location: "Los Angeles, CA",
        type: "Part-time",
        salary: "$80,000 - $120,000",
        description: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
        status: "none"
    },
    {
        id: 3,
        company: "DataViz Solutions",
        position: "Data Visualization Specialist",
        location: "Boston, MA",
        type: "Full-time",
        salary: "$125,000 - $165,000",
        description: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
        status: "none"
    },
    {
        id: 4,
        company: "CloudFirst Inc",
        position: "Backend Developer",
        location: "Seattle, WA",
        type: "Full-time",
        salary: "$140,000 - $190,000",
        description: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.",
        status: "none"
    },
    {
        id: 5,
        company: "Innovation Labs",
        position: "UI/UX Engineer",
        location: "Austin, TX",
        type: "Full-time",
        salary: "$110,000 - $150,000",
        description: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.",
        status: "none"
    },
    {
        id: 6,
        company: "MegaCorp Solutions",
        position: "JavaScript Developer",
        location: "New York, NY",
        type: "Full-time",
        salary: "$130,000 - $170,000",
        description: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.",
        status: "none"
    },
    {
        id: 7,
        company: "StartupXYZ",
        position: "Full Stack Engineer",
        location: "Remote",
        type: "Full-time",
        salary: "$120,000 - $160,000",
        description: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.",
        status: "none"
    },
    {
        id: 8,
        company: "TechCorp Industries",
        position: "Senior Frontend Developer",
        location: "San Francisco, CA",
        type: "Full-time",
        salary: "$150,000 - $175,000",
        description: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.",
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
        container.innerHTML = "";
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
<p class="text-sm text-gray-500 mb-4">${job.position}</p>
  <p class="text-xs text-gray-400 mb-4">${job.location} • ${job.type} • ${job.salary}</p>

<span class="inline-block mt-1 px-2 py-1 text-xs rounded 
${job.status === 'interview' ? 'bg-green-100 text-green-700' :
                job.status === 'rejected' ? 'bg-red-100 text-red-700' :
                    'bg-blue-100 text-blue-700'}">
  
${job.status === 'interview' ? 'INTERVIEW' :
                job.status === 'rejected' ? 'REJECTED' :
                    'NOT APPLIED'}

</span>
         
        </div>
        <button onclick="deleteJob(${job.id})" class="text-gray-400 hover:text-red-500"><i class="fa-regular fa-trash-can"></i></button>
      </div>
      <p class="text-sm mt-2">${job.description}</p>
      <div class="flex gap-2 mt-3">
        <button onclick="toggleStatus(${job.id}, 'interview')" 
          class="px-3 py-1 text-sm rounded border ${job.status === 'interview' ? 'bg-green-500 text-white' : 'border-green-500 text-green-600'}">
          Interview
        </button>

        <button onclick="toggleStatus(${job.id}, 'rejected')" 
          class="px-3 py-1 text-sm rounded border ${job.status === 'rejected' ? 'bg-red-500 text-white' : 'border-red-500 text-red-600'}">
          Rejected
        </button>
      </div>
    `;

        container.appendChild(div);
    });
    updateDashboard();
}

function toggleStatus(id, status) {
    const job = jobs.find(j => j.id === id);

    if (job.status === status) {
        job.status = "none";
    } else {
        job.status = status;
    }

    renderJobs();
}

function deleteJob(id) {
    const index = jobs.findIndex(j => j.id === id);
    if (index !== -1) {
        jobs.splice(index, 1);
    }
    renderJobs();
}

function changeTab(tab, event) {
    currentTab = tab;

    document.querySelectorAll(".tab-btn").forEach(btn => {
        btn.classList.remove("bg-blue-600", "text-white");
        btn.classList.add("bg-gray-200");
    });
    event.target.classList.remove("bg-gray-200");
    event.target.classList.add("bg-blue-600", "text-white");

    renderJobs();
}

function updateDashboard() {
    document.getElementById("totalCount").innerText = jobs.length;
    document.getElementById("interviewCount").innerText =
        jobs.filter(j => j.status === "interview").length;
    document.getElementById("rejectedCount").innerText =
        jobs.filter(j => j.status === "rejected").length;
}

renderJobs();