<script setup lang="ts"></script>
<template>
  <header class="d-flex justify-content-between align-items-center border-bottom px-4 py-3">
    <div class="d-flex align-items-center gap-3">
      <img src="/logo.png" alt="Logo" class="logo" />
      <div>
        <h2 class="title">Vue Sneakers</h2>
        <p class="subtitle">exemplo</p>
      </div>
    </div>

    <ul class="d-flex align-items-center list-unstyled mb-0 gap-4">
      <li class="d-flex align-items-center gap-2 cart-item">
        <img src="/cart.svg" alt="Cart" />
        <b>exemplo</b>
      </li>
      <li class="d-flex align-items-center gap-2 favorite-item">
        <img src="/heart.svg" alt="Favorite" />
        <span>exemplo</span>
      </li>
      <li class="d-flex align-items-center gap-2 profile-item">
        <img src="/profile.svg" alt="Profile" />
        <span>exemplo</span>
      </li>
    </ul>
  </header>
</template>

<style scoped>
/* Logo styling */
.logo {
  width: 44px;
}

.title {
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1.25rem;
  margin-bottom: 0;
}

.subtitle {
  color: #6c757d; /* Bootstrap muted text */
  margin-bottom: 0;
}

.cart-item,
.favorite-item,
.profile-item {
  cursor: pointer;
}

.cart-item img,
.favorite-item img,
.profile-item img {
  width: 20px;
}
</style>
