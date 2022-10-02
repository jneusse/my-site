import { Box, Container, Grid, LinearProgress, Typography } from '@mui/material'
import { linearProgressClasses } from '@mui/material/LinearProgress'
import { styled } from '@mui/material/styles'

const SectionBox = styled(Box)(
  ({ theme }) => `
    background-color: ${theme.palette.background.default};
    position: relative;
`
)

const BoxId = styled(Box)(
  ({ theme }) => `
    background-color: ${theme.palette.background.default};
    height: 64px;
    width: 100%;
`
)

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.primary.darker
  },
  [`& .${linearProgressClasses.bar}`]: {
    backgroundColor: theme.palette.primary.main
  }
}))

type LanguagesValuesType = {
  basic?: string[]
  intermediate?: string[]
  avanced?: string[]
  native: string[]
}

type SkillValueType = {
  name: string
  porcent: number
}

type SkillsType = {
  programmingLanguages: SkillValueType[]
  frameworks: SkillValueType[]
  database: SkillValueType[]
  tools: string[]
  languages: LanguagesValuesType
}

type EducationType = {
  name: string
  year: string
  location: string
  title: string
}

type ProjectType = {
  position: string
  projectName: string
  fromDate?: string
  toDate?: string
  description: string[]
  techStack?: string
  links?: string[]
}

type ExperienceType = {
  companyName: string
  fromDate?: string
  toDate?: string
  position?: string
  description?: string[]
  projects?: ProjectType[]
}
interface IResumeProps {
  experience: ExperienceType[]
  education: EducationType[]
  skills: SkillsType
}

const level = (value: number) => {
  if (value <= 30) return 'Basic'
  if (value <= 60) return 'Intermediate'
  if (value >= 60) return 'Advanced'
}

const Resume: React.FunctionComponent<IResumeProps> = ({
  experience,
  education,
  skills
}) => {
  const programmingLanguages = skills.programmingLanguages.sort(
    (a, b) => b.porcent - a.porcent
  )
  const frameworks = skills.frameworks.sort((a, b) => b.porcent - a.porcent)
  const database = skills.database.sort((a, b) => b.porcent - a.porcent)
  return (
    <SectionBox>
      <BoxId id="Resume" />
      <Container>
        <Grid container direction="row">
          <Grid item xs={12} md={6} textAlign={{ xs: 'left', md: 'right' }}>
            <Typography component="h2" variant="h2" mb={2}>
              Education
            </Typography>
          </Grid>
          {education &&
            education.map((item, index) => (
              <Grid
                item
                xs={12}
                md={6}
                pl={{ md: 4, xs: 2 }}
                mb={8}
                key={index}
              >
                <Typography component="h4" variant="h4" align="left" mb={2}>
                  {item.name}
                </Typography>
                <Typography align="left">
                  {item.location}, {item.title}, {item.year}
                </Typography>
              </Grid>
            ))}
          <Grid item xs={12} md={6} textAlign={{ xs: 'left', md: 'right' }}>
            <Typography component="h2" variant="h2" mb={2}>
              Work
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} pl={{ md: 4, xs: 2 }} mb={8}>
            {experience.map((item, index) => (
              <Box key={index}>
                <Typography component="h4" variant="h4" align="left" mb={2}>
                  {item.companyName}
                </Typography>
                {item.position && item.fromDate && (
                  <Typography component="h5" variant="h5" align="left">
                    {item.position} | {item.fromDate} - {item.toDate}
                  </Typography>
                )}
                {item.description && (
                  <ul>
                    {item.description.map((item, index) => (
                      <li key={index} className="item_description">
                        <Typography
                          component="p"
                          variant="body1"
                          align="left"
                          paragraph
                        >
                          {item}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                )}
                {item.projects && (
                  <Typography component="h5" variant="h5" align="left">
                    Projects
                  </Typography>
                )}
                {item.projects && (
                  <ul>
                    {item.projects.map((itemProject, index) => (
                      <li key={index} className="item_description">
                        <Typography
                          component="p"
                          variant="body1"
                          align="left"
                          paragraph
                        >
                          {itemProject.position}, {itemProject.projectName},{' '}
                          {itemProject.fromDate} - {itemProject.toDate}
                        </Typography>
                        <ul>
                          {itemProject.description.map((itemDesc, i) => (
                            <li className="item_description" key={i}>
                              <Typography
                                component="p"
                                variant="body1"
                                align="left"
                                paragraph
                              >
                                {itemDesc}
                              </Typography>
                            </li>
                          ))}
                        </ul>
                        {itemProject.techStack && (
                          <Typography
                            component="p"
                            variant="body1"
                            align="left"
                            paragraph
                          >
                            Tech Stack: {itemProject.techStack}
                          </Typography>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </Box>
            ))}
          </Grid>
          <Grid item xs={12} md={6} textAlign={{ xs: 'left', md: 'right' }}>
            <Typography component="h2" variant="h2" mb={2}>
              Skills
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} pl={{ md: 4, xs: 2 }} mb={8}>
            <Typography component="h4" variant="h4" align="left" mb={2}>
              Programming Languages
            </Typography>
            {programmingLanguages.map((item, index) => (
              <Box key={index} pl={2}>
                <Typography component="h4" variant="h4" align="left" mb={2}>
                  {item.name} | {level(item.porcent)}
                </Typography>
                <BorderLinearProgress
                  variant="determinate"
                  value={item.porcent}
                  sx={{ marginBottom: 2 }}
                />
              </Box>
            ))}
            <Typography component="h4" variant="h4" align="left" mb={2}>
              Frameworks
            </Typography>
            {frameworks.map((item, index) => (
              <Box key={index} pl={2}>
                <Typography component="h4" variant="h4" align="left" mb={2}>
                  {item.name} | {level(item.porcent)}
                </Typography>
                <BorderLinearProgress
                  variant="determinate"
                  value={item.porcent}
                  sx={{ marginBottom: 2 }}
                />
              </Box>
            ))}
            <Typography component="h4" variant="h4" align="left" mb={2}>
              Data Base
            </Typography>
            {database.map((item, index) => (
              <Box key={index} pl={2}>
                <Typography component="h4" variant="h4" align="left" mb={2}>
                  {item.name} | {level(item.porcent)}
                </Typography>
                <BorderLinearProgress
                  variant="determinate"
                  value={item.porcent}
                  sx={{ marginBottom: 2 }}
                />
              </Box>
            ))}
            <Typography component="h4" variant="h4" align="left" mb={2}>
              Tools
            </Typography>
            <Typography component="h4" variant="h4" align="left" mb={2} ml={2}>
              {skills.tools.map(
                (item, index) =>
                  `${item}${index !== skills.tools.length - 1 ? ',' : ''} `
              )}
            </Typography>
            <Typography component="h4" variant="h4" align="left" mb={2}>
              Languages
            </Typography>
            <Typography component="h5" variant="h5" align="left" mb={2}>
              Native:{' '}
              {skills.languages.native.map(
                (item, index) =>
                  `${item}${
                    index !== skills.languages.native?.length! - 1 ? ',' : ''
                  } `
              )}
            </Typography>
            {skills.languages.avanced?.length! > 0 && (
              <Typography component="h5" variant="h5" align="left" mb={2}>
                Avanced:{' '}
                {skills.languages.avanced!.map(
                  (item, index) =>
                    `${item}${
                      index !== skills.languages.avanced?.length! - 1 ? ',' : ''
                    } `
                )}
              </Typography>
            )}
            {skills.languages.intermediate?.length! > 0 && (
              <Typography component="h5" variant="h5" align="left" mb={2}>
                Intermediate:{' '}
                {skills.languages.intermediate!.map(
                  (item, index) =>
                    `${item}${
                      index !== skills.languages.intermediate?.length! - 1
                        ? ','
                        : ''
                    } `
                )}
              </Typography>
            )}
            {skills.languages.basic?.length! > 0 && (
              <Typography component="h5" variant="h5" align="left" mb={2}>
                Basic:{' '}
                {skills.languages.basic!.map(
                  (item, index) =>
                    `${item}${
                      index !== skills.languages.basic?.length! - 1 ? ',' : ''
                    } `
                )}
              </Typography>
            )}
          </Grid>
        </Grid>
      </Container>
    </SectionBox>
  )
}

export default Resume
