fetch('data.json')
  .then(res => res.json())
  .then(data => {
    document.getElementById('name').textContent = data.name;
    document.getElementById('referral').textContent = data.referralCode;
    document.getElementById('donations').textContent = `$${data.donations}`;

    const rewardsList = document.getElementById('rewards');
    data.rewards.forEach(reward => {
      const li = document.createElement('li');
      li.textContent = reward;
      rewardsList.appendChild(li);
    });
  });
  fetch('data.json')
  .then(res => res.json())
  .then(data => {
    document.getElementById('name').textContent = data.name;
    document.getElementById('referral').textContent = data.referralCode;
    document.getElementById('donations').textContent = `$${data.donations}`;

    const rewardsList = document.getElementById('rewards');
    data.rewards.forEach(reward => {
      const li = document.createElement('li');
      li.textContent = reward;
      rewardsList.appendChild(li);
    });
  });

