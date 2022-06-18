<template>
  <!-- other code -->
  <ConfirmDlg ref="confirm" />
</template>

<script>
  export default {
    components: {
      ConfirmDlg: () => import("./ConfirmDlg"),
    },
    methods: {
      async delRecord() {
        if (
          await this.$refs.confirm.open(
            "Confirm",
            "Are you sure you want to delete this record?"
          )
        ) {
          this.deleteRecord();
        }
      },
      deleteRecord() {
        console.log("Record deleted.");
      },
    },
  };
</script>