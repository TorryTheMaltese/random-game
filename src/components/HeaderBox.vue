<template>
  <div class="header-container">
    <header>
      <nav>
        <ul>
          <li>
            <label>
              <input type="checkbox" @change="onChangeTheme" />
              <div class="icon-box">
                <i class="fa fa-home" aria-hidden="true">{{ themeIcon }}</i>
              </div>
            </label>
          </li>
        </ul>
      </nav>
      <div class="title-container">
        <p class="sub-title">제주특별자치도교육청</p>
        <p class="title">디지털미래기획과</p>
      </div>
    </header>
  </div>
</template>

<script>
import store from "@/stores/store";

export default {
  store,
  data() {
    return {
      themeIcon: "☀️.",
    };
  },
  methods: {
    onChangeTheme() {
      store.commit("CHANGETHEME");
      this.onChangeThemeBtn();
    },
    onChangeThemeBtn() {
      if (store.state.theme == "theme-light") {
        this.themeIcon = "☀️";
      } else if (store.state.theme == "theme-dark") {
        this.themeIcon = "🌙";
      }
    },
  },
  computed: {
    getTheme() {
      return store.state.theme;
    },
  },
  mounted() {
    this.onChangeThemeBtn();
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/themes.scss";
@import "../styles/_variables.scss";

@each $theme in $themes {
  .#{map-get($theme, "name")} {
    color: map-get($map: $theme, $key: "text");
    width: 100%;

    .header-container {
      position: relative;
      top: 0;
      left: 0;
      width: 100%;
      box-shadow: $content-box-shadow;
      padding: 10px 0;
      background-color: map-get($map: $theme, $key: "background");
      font-size: 1.2rem;
      margin-bottom: 50px;

      header {
        max-width: $max-width;

        nav ul li label {
          & input[type="checkbox"] {
            position: absolute;
            opacity: 0;
          }

          & :checked ~ .icon-box {
            box-shadow: $btn-shadow;

            & .fa {
              transform: scale(0.95);
            }
          }

          & :hover ~ .icon-box {
            transform: scale(1.05);
            transition: 0.2s;
          }

          & .icon-box {
            padding: 10px;
            background: map-get($map: $theme, $key: "light-color");
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: $btn-shadow;
            border-radius: 10px;
          }
        }

        .title-container {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          user-select: none;

          p {
            align-content: center;
            margin-left: 10px;
          }
          .sub-title {
            color: rgba(map-get($map: $theme, $key: "text"), 0.6);
            font-size: 0.95rem;
          }

          .title {
            color: $main-color;
            font-size: 1.2rem;
            font-weight: bold;
          }
        }
      }
    }
  }
}
</style>
