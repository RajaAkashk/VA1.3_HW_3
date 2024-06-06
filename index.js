<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Poll Voting</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
</head>

<body>

  <header class="container py-3">
    <h1 class="display-5 fw-semibold">Poll Voting2</h1>
  </header>

  <section class="container">
    <p>John Doe: <input class="form-check-input" type="radio" name="candidates" value="JohnDoe" /> </p>

    <p>Alex William: <input class="form-check-input" type="radio" name="candidates" value="AlexWilliam" /> </p>

    <p>Prerana Nawar: <input class="form-check-input" type="radio" name="candidates" value="PreranaNawar" /> </p>

    <button id="voteBtn" class="btn btn-primary">Vote</button>
  </section>

  <section class="container my-4">
    <h2>Results:</h2>
    <div id="resultsBox"></div>
  </section>

  <section class="container my-2">
    <h2>Winner:</h2>
    <div id="winnerBox"></div>
  </section>

  <script>
    const voteBtn = document.getElementById('voteBtn');
    let voteCountForJohnDoe = 0;
    let voteCountForAlexWilliam = 0;
    let voteCountForPreranaNawar = 0;

    voteBtn.addEventListener('click', function () {
      const candidate = document.querySelector('input[name="candidates"]:checked').value;

      if (!candidate) {
        alert("Please select a candidate.");
        return;
      }

      if (candidate === "JohnDoe") {
        voteCountForJohnDoe++;
      } else if (candidate === "AlexWilliam") {
        voteCountForAlexWilliam++;
      } else if (candidate === "PreranaNawar") {
        voteCountForPreranaNawar++;
      }


      const results = document.getElementById('resultsBox');
      results.innerHTML = '';
      const resultsElement = document.createElement('div');
      resultsElement.innerHTML = `
        <div class="card p-2">
          <p class="fs-5 mx-2 my-1 fw-normal">John Doe: ${voteCountForJohnDoe}</p>
          </div>
          <div class="card p-2">
          <p class="fs-5 mx-2 my-1 fw-normal">Alex William: ${voteCountForAlexWilliam}</p>
          </div>
          <div class="card p-2">
          <p class="fs-5 mx-2 my-1 fw-normal">Prerana Nawar: ${voteCountForPreranaNawar}</p>
        </div>
      `;
      results.appendChild(resultsElement);


      const winner = document.getElementById('winnerBox');
      winner.innerHTML = '';
      const winnerElement = document.createElement('div');

      const maxVotes = Math.max(voteCountForJohnDoe, voteCountForAlexWilliam, voteCountForPreranaNawar);
      const winners = [];
      if (voteCountForJohnDoe === maxVotes) winners.push("John Doe");
      if (voteCountForAlexWilliam === maxVotes) winners.push("Alex William");
      if (voteCountForPreranaNawar === maxVotes) winners.push("Prerana Nawar");

      if (winners.length === 1) {
        winnerElement.innerHTML = `
          <p class="fs-5 mx-2 my-1 fw-normal">${winners[0]} is the winner!</p>
        `;
      } else {
        winnerElement.innerHTML = `
          <p class="fs-5 mx-2 my-1 fw-normal">Tie Between ${winners.join(' & ')}</p>
        `;
      }

      winner.appendChild(winnerElement);
    });
  </script>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>
