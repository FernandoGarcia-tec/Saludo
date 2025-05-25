import React, { forwardRef } from "react";

type CardProps = React.HTMLAttributes<HTMLDivElement> & { style?: React.CSSProperties };
type CardTextProps = React.HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement> & { style?: React.CSSProperties };

const Card = forwardRef<HTMLDivElement, CardProps>(({ style, ...props }, ref) => (
  <div ref={ref} style={{ ...styles.card, ...style }} {...props} />
));
Card.displayName = "Card";

const CardHeader = forwardRef<HTMLDivElement, CardProps>(({ style, ...props }, ref) => (
  <div ref={ref} style={{ ...styles.header, ...style }} {...props} />
));
CardHeader.displayName = "CardHeader";

const CardTitle = forwardRef<HTMLHeadingElement, CardTextProps>(({ style, ...props }, ref) => (
  <h2 ref={ref} style={{ ...styles.title, ...style }} {...props} />
));
CardTitle.displayName = "CardTitle";

const CardDescription = forwardRef<HTMLParagraphElement, CardTextProps>(({ style, ...props }, ref) => (
  <p ref={ref} style={{ ...styles.description, ...style }} {...props} />
));
CardDescription.displayName = "CardDescription";

const CardContent = forwardRef<HTMLDivElement, CardProps>(({ style, ...props }, ref) => (
  <div ref={ref} style={{ ...styles.content, ...style }} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = forwardRef<HTMLDivElement, CardProps>(({ style, ...props }, ref) => (
  <div ref={ref} style={{ ...styles.footer, ...style }} {...props} />
));
CardFooter.displayName = "CardFooter";

const styles: { [key: string]: React.CSSProperties } = {
  card: {
    borderRadius: 12,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#e5e7eb",
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
    margin: 8,
  },
  header: {
    display: "flex",
    flexDirection: "column",
    padding: 16,
    paddingBottom: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: 600,
    letterSpacing: 0.5,
    marginBottom: 2,
    margin: 0,
  },
  description: {
    fontSize: 14,
    color: "#6b7280",
    margin: 0,
  },
  content: {
    padding: 16,
    paddingTop: 0,
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    paddingTop: 0,
  },
};

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
