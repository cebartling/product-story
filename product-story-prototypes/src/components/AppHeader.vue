<template>
  <div class="app-header">
    <div class="brand">
      <div class="brand-logo">
        <img
          alt="ProductStory logo"
          src="@/assets/logo.png"
          height="50"
          width="50"
        />
      </div>
      <div class="brand-name">ProductStory</div>
    </div>
    <UserProfileImage></UserProfileImage>
  </div>
</template>

<script>
import UserProfileImage from "./UserProfileImage";
export default {
  name: "AppHeader",
  components: { UserProfileImage }
};
</script>

<style scoped lang="scss">
.app-header {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: #00005f;
  color: #ffffff;
  padding: 8px;

  .brand {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;

    .brand-logo {
    }

    .brand-name {
      font-family: Roboto, sans-serif;
      font-size: 2rem;
      font-weight: bold;
    }
  }
}
</style>
