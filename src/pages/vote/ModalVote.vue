<template>
  <section id="modalVote">
    <!-- modal unlike -->
    <v-dialog
      v-model="modalDislike"
      max-width="82.358125em"
    >
      <v-card id="modalDislike" class="overflowx" style="padding-block:6em;background:linear-gradient(to right top,#172035 20%,#161D33,#161E34,#192539,#1E3143,#244251,#2D5862,#387378,#449492,#53B9B1,#63E2D2)">
        <v-btn icon class="close" @click="modalDislike = false">
          <img src="@/assets/icons/close.svg" alt="close" style="--w:0.921875em">
        </v-btn>

        <v-sheet class="divcol align">
          <label for="comment" class="margin1bottom bold">Why your negative vote? </label>
          <v-textarea
            id="comment"
            v-model="dislike.comment"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet tellus quis metus fringilla rutrum. Curabitur congue lobortis metus a sagittis."
            no-resize
            solo
          ></v-textarea>
          <v-btn class="btn align" style="--bs:0 3px 4px 1px hsl(176, 60%, 40%, .3)">Send</v-btn>
        </v-sheet>
      </v-card>
    </v-dialog>
  </section>
</template>

<script>
export default {
  name: "modalVote",
  i18n: require("./i18n"),
  data() {
    return {
      modalDislike: false,
      dislike: { comment: "" }
    }
  },
  methods: {
  }
};
</script>

<style src="./Vote.scss" lang="scss" />
