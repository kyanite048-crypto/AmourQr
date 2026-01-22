import type { FC } from "react";

import { Center, Container, Grid, Image, Text, Title } from "@mantine/core";
import { useTranslations } from "next-intl";

import { useStyles } from "./style";

export const AboutUs: FC = () => {
    const { classes, theme } = useStyles();
    const t = useTranslations("landing.aboutUs");

    return (
        <Container size="lg">
            <Grid gutter={0}>
                <Grid.Col md={5} order={2} orderMd={1} sm={12}>
                    <Center>
                        <Image alt="amourqr-about-us" height={350} src="/landing-about-us.svg" width={350} />
                    </Center>
                </Grid.Col>
                <Grid.Col md={7} order={1} orderMd={2} sm={12}>
                    <Center className={classes.githubContent}>
                        <Title className={classes.sectionTitle}>{t("title")}</Title>
                        <Text mb="sm" size="lg" style={{ whiteSpace: "pre-line" }}>
                            {t("content")}
                        </Text>
                    </Center>
                </Grid.Col>
            </Grid>
        </Container>
    );
};
