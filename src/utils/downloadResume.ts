export const downloadResume = (resumeUrl: string, localFile: string) => {
  const newWindow = window.open(resumeUrl, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;

  fetch(localFile).then(response => {
    response.blob().then(blob => {
      const fileURL = window.URL.createObjectURL(blob);
      const alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "Rohan_Gajare_Resume.pdf";
      alink.click();
    });
  });
};
