<template>
  <Page>
    <ActionBar>
      <Label text="Home" />
    </ActionBar>

    <GridLayout>
      <Label class="info">
        <FormattedString>
          <Span class="fas" text.decode="&#xf135; " />
          <Span :text="message" />
        </FormattedString>
      </Label>
    </GridLayout>
  </Page>
</template>

<script>
import { firebase } from "@nativescript/firebase";

export default {
  computed: {
    async message() {
      const Ref = firebase.firestore
        .collection("comments")
        .doc("07bhQeWDf3u1j0B4vNwG");
      const doc = await Ref.get();
      const hoge = doc.data();
      console.log("hoge.commented_at", hoge.commented_at); // CONSOLE LOG: hoge.commented_at Sat Oct 23 2021 22:44:48 GMT+0900 (JST)
      console.log(
        "hoge.commented_at in milliseconds: ",
        Math.floor(hoge.commented_at / 1000)
      ); // CONSOLE LOG: hoge.commented_at in milliseconds:  1634996688
      const getNewDate = new Date("October 23, 2021, 22:44:48 GMT+0900"); // same as hoge.commented_at
      console.log("getNewDate in milliseconds: ", getNewDate.getTime() / 1000); // CONSOLE LOG: getNewDate in milliseconds:  1634996688
      const hogeToDate = hoge.toDate();
      console.log("hogeToDate", hogeToDate);
      return hogeToDate;
    },
  },
};
</script>

<style scoped lang="scss">
@import "@nativescript/theme/scss/variables/blue";

// Custom styles
.fas {
  @include colorize($color: accent);
}

.info {
  font-size: 20;
  horizontal-align: center;
  vertical-align: center;
}
</style>
