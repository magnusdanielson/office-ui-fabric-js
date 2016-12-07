var data = {
   componentName: "Spinner",
   overview: "<p>Displays the progress of an operation when the percentage complete can not be determined. Do you know how much of the operation is complete? Use a ProgressIndicator instead.</p>",
   variants: [
      {
         name: "Default Spinner",
         templateFile: "SpinnerExample",
         model: "SpinnerExampleModel"
      },
      {
         name: "Large Spinner",
         templateFile: "SpinnerExample",
         model: "SpinnerLargeExampleModel"
      },
      {
         name: "Spinner with Label",
         templateFile: "SpinnerExample",
         model: "SpinnerWithLabelExampleModel"
      },
      {
         name: "Large Spinner with Label",
         templateFile: "SpinnerExample",
         model: "SpinnerLargeWithLabelExampleModel"
      }
   ],
   jsFile: "SpinnerExampleJS"
}

module.exports = data;