import React from 'react'
import { motion } from "framer-motion";

const Index = ({children,recipe, className, ingredients}) => {
    return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{
        y: ingredients["{recipe}"] ? 100 : -100,
        opacity: ingredients["{recipe}"] ? 1 : 0,
        }}
        transition={{ duration: 1 }}
        className={className}
>
        {children}
    </motion.div>
    )
  
}

export default Index;