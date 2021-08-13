export const RecruiterRouter = {
    dashboardPage: '/recruiter/dashboard',
    profilePage: '/recruiter/dashboard/profile',
    recruitmentsPage: '/recruiter/dashboard/recruitments',
    newRecruitment: '/recruiter/dashboard/recruitments/new',
    editRecruitment: '/recruiter/dashboard/recruitments/:recruitmentId',
}

export const CandidateRouter = {
    homePage: '/',
    loginPage: '/login',
    savedJobs: '/saved_jobs'
}

export const AssetPath = {
    logoPath: process.env.PUBLIC_URL + "/logo.png",
    userAvatarPath: process.env.PUBLIC_URL + "/assets/user/avatar/"
}
