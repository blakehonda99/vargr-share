import {
  Button,
  Container,
  createStyles,
  Text,
  Title,
} from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Meta from "../components/Meta";
import useUser from "../hooks/user.hook";

const useStyles = createStyles((theme) => ({
  container: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
  },

  content: {
    textAlign: "center",
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    background: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    boxShadow: theme.shadows.sm,
  },

  title: {
    fontFamily: theme.fontFamily,
    fontSize: 28,
    fontWeight: 600,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    marginBottom: theme.spacing.md,

    [theme.fn.smallerThan("sm")]: {
      fontSize: 24,
    },
  },

  text: {
    color: theme.colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[6],
    marginBottom: theme.spacing.xl,
  },

  button: {
    marginTop: theme.spacing.md,
  },
}));

export default function Home() {
  const { classes } = useStyles();
  const { refreshUser } = useUser();
  const router = useRouter();

  useEffect(() => {
    refreshUser().then((user) => {
      if (user) {
        router.replace("/upload");
      }
    });
  }, []);

  return (
    <>
      <Meta title="Vargr Share" />
      <div className={classes.container}>
        <Container size="sm">
          <div className={classes.content}>
            <Title className={classes.title}>
              Vargr Share
            </Title>
            <Text size="lg" className={classes.text}>
              Personal file sharing system
            </Text>
            <Text size="sm" color="dimmed" mb="xl">
              For access, contact vargr
            </Text>
            <Button
              component={Link}
              href="/auth/signIn"
              size="md"
              className={classes.button}
            >
              Sign In
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}
