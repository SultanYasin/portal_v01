import { Box, Button, Container, Typography, Card, Grid } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import StorageIcon from '@mui/icons-material/Storage';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

export default function Home() {
  const services = [
    {
      icon: CodeIcon,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies',
    },
    {
      icon: DesignServicesIcon,
      title: 'UI/UX Design',
      description: 'User-centered design that drives engagement',
    },
    {
      icon: StorageIcon,
      title: 'Cloud Solutions',
      description: 'Scalable and secure cloud infrastructure',
    },
    {
      icon: SupportAgentIcon,
      title: '24/7 Support',
      description: 'Round-the-clock technical assistance',
    },
  ];

  return (
    <Box
      component="main"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        pt: { xs: 12, md: 16 },
        pb: { xs: 8, md: 12 },
        bgcolor: 'background.default',
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          px: { xs: 2, sm: 4, md: 8 },
        }}
      >
        <Grid container spacing={{ xs: 8, md: 12 }} alignItems="center">
          {/* Left Content */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                maxWidth: 700,
                mx: { xs: 'auto', md: 0 },
                pr: { md: 4 },
              }}
            >
              <Typography
                component="h1"
                sx={{
                  fontSize: { xs: '2.5rem', sm: '3rem', md: '3.75rem' },
                  fontWeight: 600,
                  lineHeight: 1.1,
                  mb: { xs: 4, md: 6 },
                  letterSpacing: '-0.02em',
                  color: 'text.primary',
                }}
              >
                We build digital{' '}
                <Box
                  component="span"
                  sx={{
                    color: 'primary.main',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: '8%',
                      left: 0,
                      width: '100%',
                      height: '40%',
                      bgcolor: 'primary.main',
                      opacity: 0.15,
                      zIndex: -1,
                    },
                  }}
                >
                  products
                </Box>{' '}
                that people love
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: '1.125rem', md: '1.25rem' },
                  color: 'text.secondary',
                  mb: { xs: 6, md: 8 },
                  maxWidth: '90%',
                  lineHeight: 1.6,
                  opacity: 0.9,
                }}
              >
                We help ambitious businesses like yours generate more profits by
                building awareness, driving web traffic, and growing overall
                sales.
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  gap: 3,
                  mb: { xs: 8, md: 12 },
                  flexWrap: 'wrap',
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    py: 2,
                    px: 5,
                    fontSize: '1.1rem',
                    textTransform: 'none',
                    borderRadius: 2,
                  }}
                >
                  Start Project
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    py: 2,
                    px: 5,
                    fontSize: '1.1rem',
                    textTransform: 'none',
                    borderRadius: 2,
                    color: 'primary.main',
                    borderColor: 'primary.main',
                    '&:hover': {
                      borderColor: 'primary.dark',
                      color: 'primary.dark',
                    },
                  }}
                >
                  Learn More
                </Button>
              </Box>

              {/* Metrics */}
              <Box
                sx={{
                  display: 'flex',
                  gap: { xs: 6, md: 10 },
                  pt: { xs: 6, md: 8 },
                  borderTop: '1px solid',
                  borderColor: 'divider',
                }}
              >
                {[
                  { value: '98%', label: 'Customer Satisfaction' },
                  { value: '250+', label: 'Completed Projects' },
                  { value: '12+', label: 'Years of Experience' },
                ].map((metric) => (
                  <Box key={metric.label}>
                    <Typography
                      sx={{
                        fontSize: { xs: '1.75rem', md: '2rem' },
                        fontWeight: 700,
                        color: 'primary.main',
                        mb: 1,
                      }}
                    >
                      {metric.value}
                    </Typography>
                    <Typography
                      sx={{
                        color: 'text.secondary',
                        opacity: 0.9,
                      }}
                    >
                      {metric.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Right Content - Service Cards */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                gap: { xs: 3, md: 4 },
                position: 'relative',
                maxWidth: 800,
                mx: 'auto',
                pl: { md: 6 },
              }}
            >
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card
                    key={service.title}
                    sx={{
                      p: { xs: 3, md: 4 },
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 3,
                      transform: {
                        xs: 'none',
                        md: index % 2 ? 'translateY(3rem)' : 'none',
                      },
                      transition: 'all 0.3s ease-in-out',
                      boxShadow: 3,
                      borderRadius: 2,
                      bgcolor: 'background.paper',
                      '&:hover': {
                        transform: `translateY(${
                          index % 2 ? '2.5rem' : '-0.5rem'
                        })`,
                        boxShadow: 8,
                      },
                    }}
                  >
                    <Icon
                      sx={{
                        fontSize: '3rem',
                        color: 'primary.main',
                      }}
                    />
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: '1.25rem',
                        fontWeight: 600,
                        color: 'text.primary',
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: 'text.secondary',
                        opacity: 0.9,
                        lineHeight: 1.6,
                      }}
                    >
                      {service.description}
                    </Typography>
                  </Card>
                );
              })}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
