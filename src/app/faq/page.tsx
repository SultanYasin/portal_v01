'use client';

import * as React from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  CircularProgress,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from '../../theme';

// Types for API Data
interface FAQItem {
  id: string;
  createdAt: string;
  title: string;
  question: string;
  answer: string;
}

interface FAQPageContent {
  title: string;
  subtitle: string;
}

// Static content for header
const staticContent: FAQPageContent = {
  title: 'Frequently Asked Questions',
  subtitle: 'Find answers to common questions about our dashboard',
};

export default function FAQ() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [faqs, setFaqs] = React.useState<FAQItem[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchFAQs = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          'https://67bf9804b9d02a9f2246a1b0.mockapi.io/cms/api/v1/faq'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch FAQs');
        }
        const data = await response.json();
        setFaqs(data);
      } catch (err) {
        setError('Failed to load FAQ content');
        console.error('Error fetching FAQs:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchFAQs();
  }, []);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="60vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="60vh"
      >
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        maxWidth: '900px',
        margin: '40px auto',
        padding: '0 20px',
      }}
    >
      {/* Header Section */}
      <Box mb={5} textAlign="center">
        <Typography
          variant="h1"
          sx={{
            mb: 2,
            fontSize: '2rem',
            fontWeight: 'bold',
            color: colors.grey[100],
          }}
        >
          {staticContent.title}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: colors.grey[100],
            mb: 4,
            fontSize: '1.5rem',
            fontWeight: 'bold',
          }}
        >
          {staticContent.subtitle}
        </Typography>
      </Box>

      <Box>
        {faqs.map((faq) => (
          <Accordion
            key={faq.id}
            sx={{
              mb: 2,
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              '&:before': {
                display: 'none',
              },
              '&:hover': {
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              },
              backgroundColor: colors.primary[400],
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    color: colors.grey[100],
                    fontSize: '1.5rem',
                  }}
                />
              }
              sx={{
                '& .MuiAccordionSummary-content': {
                  margin: '16px 0',
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'medium',
                  color: colors.grey[100],
                  fontSize: '1.5rem',
                }}
              >
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                backgroundColor: colors.primary[400],
                padding: '20px 30px 30px',
              }}
            >
              <Typography
                sx={{
                  color: colors.grey[100],
                  lineHeight: 1.6,
                  fontSize: '1.3rem',
                }}
              >
                {faq.answer}
              </Typography>
              <Typography
                sx={{
                  color: colors.grey[300],
                  fontSize: '0.9rem',
                  mt: 2,
                }}
              >
                Last updated: {new Date(faq.createdAt).toLocaleDateString()}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
}
