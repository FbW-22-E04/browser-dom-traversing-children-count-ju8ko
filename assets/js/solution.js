const wrapper = document.getElementById("wrapper");

console.log(wrapper.children, wrapper.childElementCount);

for (let index = 0; index < wrapper.children.length; index++) {
  const element = wrapper.children[index];

  console.log(element.children, element.children.length);
}

const getElementWithMostClasses = (list) => {
  let el = null;
  let maxLength = 0;

  for (let index = 0; index < list.length; index++) {
    const element = list[index];

    if (element.classList.length > maxLength) {
      maxLength = element.classList.length;
      el = element;
    }
  }

  return {
    element: el,
    numberOfClasses: maxLength,
  };
};
console.log(getElementWithMostClasses(wrapper.children));
