import {toasterNotification} from "../components/assets/ToasterNotification";

const async = async (cb: () => Promise<void>) => {
  try {
    await cb();
  } catch (err: any) {
    console.log({err});

    if (err.error) {
      if (err.error.status === 400) {
        toasterNotification("error", err.error.data.message);
      } else {
        toasterNotification(
          "error",
          "Something went wrong! Please try again later."
        );
      }
    } else {
      toasterNotification("error", "Something went wrong!");
    }
  }
};

export default async;
