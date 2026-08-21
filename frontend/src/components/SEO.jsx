import { useEffect } from "react";

const SITE_URL = "https://portfolio-5fw8.onrender.com";

function SEO({
    title,
    description,
    path = "/",
}) {
    useEffect(() => {
        document.title = title;

        const canonicalUrl =
            `${SITE_URL}${path}`;

        const updateMeta = (
            attribute,
            key,
            content
        ) => {
            let meta =
                document.head.querySelector(
                    `meta[${attribute}="${key}"]`
                );

            if (!meta) {
                meta =
                    document.createElement("meta");

                meta.setAttribute(
                    attribute,
                    key
                );

                document.head.appendChild(
                    meta
                );
            }

            meta.setAttribute(
                "content",
                content
            );
        };

        updateMeta(
            "name",
            "description",
            description
        );

        updateMeta(
            "property",
            "og:title",
            title
        );

        updateMeta(
            "property",
            "og:description",
            description
        );

        updateMeta(
            "property",
            "og:url",
            canonicalUrl
        );

        updateMeta(
            "name",
            "twitter:title",
            title
        );

        updateMeta(
            "name",
            "twitter:description",
            description
        );

        let canonical =
            document.head.querySelector(
                'link[rel="canonical"]'
            );

        if (!canonical) {
            canonical =
                document.createElement("link");

            canonical.setAttribute(
                "rel",
                "canonical"
            );

            document.head.appendChild(
                canonical
            );
        }

        canonical.setAttribute(
            "href",
            canonicalUrl
        );

    }, [title, description, path]);

    return null;
}

export default SEO;