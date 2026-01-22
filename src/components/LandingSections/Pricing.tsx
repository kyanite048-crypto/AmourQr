import type { FC } from "react";

import { Button, Card, Container, Flex, SimpleGrid, Text, Title } from "@mantine/core";
import { IconCheckbox } from "@tabler/icons";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";

import { env } from "src/env/client.mjs";

import { useStyles } from "./style";
import { LoginOptions } from "../LoginOptions";

export const Pricing: FC<{ scrollToContactUs: () => void }> = ({ scrollToContactUs }) => {
    const { classes, theme } = useStyles();
    const t = useTranslations("landing.pricing");

    const features = [
        "Unlimited restaurants",
        "Unlimited menus",
        "Unlimited categories & items",
        "Unlimited banners",
        "Priority support",
    ];

    return (
        <Container py={theme.spacing.xl * 3} size="md">
            <Title className={classes.sectionTitle}>{t("title")}</Title>

            <SimpleGrid breakpoints={[{ cols: 1, maxWidth: "md" }]} cols={1} mt={50} spacing="xl">
                <Card className={classes.card} p="xl" radius="md" shadow="md">
                    <Text className={classes.cardTitle} color={theme.black} mt="md" size="lg" weight={500}>
                        Custom Pricing
                    </Text>
                    <Text color={theme.black} opacity={0.6} size="md">
                        Flexible plans tailored to your restaurant or business needs.
                    </Text>
                    {features.map((item) => (
                        <Flex key={item} align="center" gap={10} mt="sm">
                            <IconCheckbox color={theme.black} />
                            <Text color={theme.black} opacity={0.8} size="md">
                                {item}
                            </Text>
                        </Flex>
                    ))}
                    <Button fullWidth mt="xl" onClick={() => scrollToContactUs()} size="lg">
                        Contact Us
                    </Button>
                </Card>
            </SimpleGrid>
        </Container>
    );
};
