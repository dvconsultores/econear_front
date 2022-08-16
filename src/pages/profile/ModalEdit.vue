<template>
  <v-dialog
    v-model="modalEdit"
    max-width="82.358125em"
  >
    <v-card color="var(--primary)" class="modalEdit overflowx">
      <v-btn icon class="close" @click="modalEdit = false">
        <img src="@/assets/icons/close.svg" alt="close" style="--w:0.921875em">
      </v-btn>
      <h4 class="tcenter">Edit Profile</h4>

      <v-sheet style="isolation:isolate">
        <section class="up" style="z-index:-1">
          <v-btn class="btn" style="--bg:#101C2F;--p:.5em .8em;--bs:0px 2.5px 7px .5px #6FFFE9;width:min(100%, 8.2em)">
            <span style="font-size: 1.25em">Upload</span>
          </v-btn>
          <v-avatar width="8.130625em" height="8.130625em">
            <img src="@/assets/logos/user.png" alt="avatar" style="--b:3px solid var(--success);--br:50%;--w:100%">
          </v-avatar>
        </section>

        <section class="down fwrap" style="--fb:1 1 clamp(15em, 22vw, 22.76125em)">
          <div class="divcol">
            <label for="username">Username</label>
            <v-text-field
              v-model="dataModalEdit.username"
              id="username"
              solo
            ></v-text-field>
          </div>

          <div class="divcol">
            <label for="email">Email</label>
            <v-text-field
              v-model="dataModalEdit.email"
              id="email"
              placeholder="example@domain.com"
              solo
            ></v-text-field>
          </div>

          <div class="divcol">
            <label for="discord_id">Discord ID</label>
            <v-text-field
              v-model="dataModalEdit.discord_id"
              id="discord_id"
              placeholder="Username#321"
              solo
            ></v-text-field>
          </div>

          <div class="divcol">
            <label for="website">Website</label>
            <v-text-field
              v-model="dataModalEdit.website"
              id="website"
              solo
            ></v-text-field>
          </div>

          <div class="divcol">
            <label for="twitter">Twitter Account</label>
            <v-text-field
              v-model="dataModalEdit.twitter"
              id="twitter"
              solo
            ></v-text-field>
          </div>

          <div class="divcol">
            <label for="discord_server">Discrod Server</label>
            <v-text-field
              v-model="dataModalEdit.discord_server"
              id="discord_server"
              placeholder="discord.gg/invitecode"
              solo
            ></v-text-field>
          </div>

          <div class="bio divcol">
            <label for="bio" class="tcenter">Bio</label>
            <v-textarea
              v-model="dataModalEdit.bio"
              id="bio"
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              no-resize
              solo
            ></v-textarea>
          </div>

          <v-btn class="btn align" style="max-width:min(90%,32.3125em);--bs:0 3px 4px 1px hsl(176, 60%, 40%, .3)">
            <span>Save</span>
          </v-btn>
        </section>
      </v-sheet>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "modalEdit",
  i18n: require("./i18n"),
  data() {
    return {
      modalEdit: false,
      dataModalEdit: {
        username: "",
        email: "",
        discord_id: "",
        website: "",
        twitter: "",
        discord_server: "",
        bio: "",
      },
    }
  },
  methods: {
  }
};
</script>

<style src="./Profile.scss" lang="scss" />
