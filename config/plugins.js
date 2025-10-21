module.exports = ({ env }) => ({
  // ... Éventuelles autres clefs
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        CLOUDINARY_URL: env("CLOUDINARY_URL"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {
          timeout: 1000 * 600 * 3,
        },
        delete: {},
      },
    },
  },
  // ... Éventuelles autres clefs
});
