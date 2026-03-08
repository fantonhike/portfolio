const GITHUB_USERNAME = "fantonhike";
const REPO_NAME = "portfolio";
const BRANCH = "main";
const IMAGE_FOLDER = "jpg";

const gallery = document.getElementById("gallery");
const status = document.getElementById("status");

async function loadImages() {
  try {
    const apiUrl = `https://api.github.com/repos/${GITHUB_USERNAME}/${REPO_NAME}/contents/${IMAGE_FOLDER}?ref=${BRANCH}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const files = await response.json();

    const imageFiles = files
      .filter(file => {
        const name = file.name.toLowerCase();
        return (
          file.type === "file" &&
          (name.endsWith(".jpg") ||
           name.endsWith(".jpeg") ||
           name.endsWith(".png") ||
           name.endsWith(".webp") ||
           name.endsWith(".gif"))
        );
      })
      .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));

    gallery.innerHTML = "";

    if (imageFiles.length === 0) {
      gallery.innerHTML = `<p id="status">No images found in /jpg</p>`;
      return;
    }

    for (const file of imageFiles) {
      const img = document.createElement("img");
      img.src = file.download_url;
      img.alt = `Roger Czartoryski portfolio page`;
      img.loading = "lazy";
      gallery.appendChild(img);
    }
  } catch (error) {
    console.error(error);
    gallery.innerHTML = `<p id="status">Could not load images.</p>`;
  }
}

loadImages();
