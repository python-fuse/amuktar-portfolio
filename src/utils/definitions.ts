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
  experience: Array<{
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    activities: string[];
  }>;
  certifications: Array<{
    title: string;
    date: string;
  }>;
  hobbies: string[];
  contact: Array<{
    platform: string;
    url: string;
  }>;
  projects: {
    data_analytics: Array<Project>;
    data_science: Array<Project>;
    data_engineering: Array<Project>;
  };
}

interface Project {
  title: string;
  tools: string[];
  project_url: string;
  activities: string[];
}
