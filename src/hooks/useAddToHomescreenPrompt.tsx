import React from "react";
export function useAddToHomescreenPrompt() {
  const [prompt, setState] = React.useState<BeforeInstallPromptEvent | null>(
    null,
  );

  const promptToInstall = () => {
    if (prompt != null) {
      return prompt.prompt();
    }
    return Promise.reject(
      new Error(
        'Tried installing before browser sent "beforeinstallprompt" event',
      ),
    );
  };

  React.useEffect(() => {
    const onReady = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      setState(e);
    };

    window.addEventListener("beforeinstallprompt", onReady);

    return () => {
      window.removeEventListener("beforeinstallprompt", onReady);
    };
  }, []);

  return [prompt, promptToInstall];
}
