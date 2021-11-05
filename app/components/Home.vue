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
      if (!doc.exists) {
        console.log("No such document!");
        return "No such document!";
      } else {
        console.log("Document data:", doc.data());
        const hoge = doc.data();
        console.log("hoge.commented_at", hoge.commented_at);
        const hogeTimestampNow = firebase.firestore.Timestamp.now();
        console.log("hogeTimestampNow", hogeTimestampNow);
        const hogeToDate = hoge.toDate();
        console.log("hogeToDate", hogeToDate);
        return hogeToDate;
      }
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
