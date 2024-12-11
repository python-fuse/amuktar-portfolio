export interface MYINFO {
  skills: {
    languages: string[];
    ml: string[];
    analysisVisualization: string[];
  };
  education: {
    bachelor: {
      degree: string;
      school: string;
      graduation: string;
      relevantCourses: string[];
    };
    master: {
      degree: string;
      school: string;
      graduation: string;
      relevantCourses: string[];
    };
  };
}
