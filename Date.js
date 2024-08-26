function calculAge() {
  const datenaissance = new Date(
    document.getElementById("datenaissance").value
  );
  const today = new Date();
  let age = today.getFullYear() - datenaissance.getFullYear();
  const monthDiff = today.getMonth() - datenaissance.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < datenaissance.getDate())
  ) {
    age--;
  }

  document.getElementById("result").textContent = `Vous avez ${age} ans.`;
}
