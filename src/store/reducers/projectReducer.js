const initState = {
  projects: [
    {
      id: "1",
      title: "Lorem ipsum dolor",
      content:
        "Curabitur maximus euismod risus vel egestas. Nam eget mauris volutpat, posuere arcu in, dictum est. Curabitur pulvinar venenatis velit, sed vulputate dolor interdum in."
    },
    {
      id: "2",
      title: "Praesent sed fermentum",
      content:
        " Maecenas id ligula eget justo gravida rhoncus a eu magna. Vestibulum non eros et tellus blandit sodales."
    },
    {
      id: "3",
      title: "Ut rhoncus ultricies",
      content:
        "Fusce malesuada lacus nec ultrices consectetur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae."
    }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("created project error", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
