const dropOutAnalysis = {
  firstPeriodRetentionRate: {
    'Less than 20%': 10,
    '20% - 40%': 20,
    '40% - 60%': 40,
    '60% - 80%': 25,
    'More than 80%': 5
  },
  percentageOfStudentsAtRisk: {
    'Academic difficulties': 30,
    'Financial problems': 20,
    'Health issues': 15,
    'Personal challenges': 25,
    Others: 10
  },
  percentageOfStudentsReEnrolledInRealTime: {
    Yes: 80,
    No: 20
  },
  percentageOfStudentMessagesWithPositiveFeedback: {
    'Very positive': 15,
    Positive: 30,
    Neutral: 40,
    Negative: 10,
    'Very negative': 5
  },
  percentageOfImplementedActionRecommendations: {
    'Fully implemented': 60,
    'Partially implemented': 25,
    'Not implemented': 10,
    Pending: 5
  },
  percentageOfAtRiskStudentsShowingImprovement: {
    'Improved academically': 45,
    'Improved financially/emotionally': 30,
    'Started showing improvement': 25,
    'No improvement': 10
  },
  percentageOfImprovementsInStudentExperience: {
    'Increased academic support': 20,
    'Improvement in student services': 15,
    'Greater availability of educational resources': 15,
    'Improved communication with professors and administrative staff': 20,
    'Improvement in the quality of infrastructure and facilities': 15,
    'Increased participation in extracurricular activities': 10,
    'Improvement in accessibility for students with disabilities': 5
  }
};

export { dropOutAnalysis };
