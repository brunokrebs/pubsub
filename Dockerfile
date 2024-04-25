# Use the official Google Cloud SDK image
FROM gcr.io/google.com/cloudsdktool/cloud-sdk:latest

# Expose the default port the emulator runs on
EXPOSE 8085

# Start the Pub/Sub emulator
ENTRYPOINT ["gcloud", "beta", "emulators", "pubsub", "start", "--host-port=0.0.0.0:8085"]
