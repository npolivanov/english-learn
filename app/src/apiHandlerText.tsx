export const voice = (lang: string) => {
  const phrase = (window as any).getSelection().toString();
  if (phrase !== "") {
    const utterThis = new SpeechSynthesisUtterance(phrase);
    utterThis.lang = lang;
    window.speechSynthesis.speak(utterThis);
  }
};

export const selectLine = (id: string) => {
  if (id !== "") {
    const input:
      | HTMLInputElement
      | null
      | undefined = (document as any).querySelector(`#${id}`);

    if (input !== null && input !== undefined) {
      input.select();
    }
  }
};

export const selectAll = (className: string) => {
  if (className !== "") {
    let inputs: any = document.querySelectorAll(`.${className}`);
    let range = new Range();
    let input;
    inputs.forEach((item: any) => {
      input = item.querySelector("input");
      input.focus();
      input.setSelectionRange(0, 2);
    });
  }
};
