<template>
  <header class="header">
    <div class="logo">
      PiaNota
    </div>

    <button class="profile-button">
      <span class="profile-icon">👤</span>
      <span>Профиль</span>
    </button>
  </header>
</template>

<style scoped>
.header {
  height: 70px;
  padding: 0 40px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: white;
  border-bottom: 1px solid #e8e4ec;
}

.logo {
  font-size: 22px;
  font-weight: 600;
}

.profile-button {
  display: flex;
  align-items: center;
  gap: 8px;

  padding: 8px 12px;

  border: none;
  border-radius: 10px;

  background: transparent;

  font-size: 15px;

  cursor: pointer;

  transition: background 0.2s;
}

.profile-button:hover {
  background: #f3f0f6;
}

.profile-icon {
  font-size: 20px;
}
</style>