'use client';
import React from "react";
import {TextField, Text, TextArea, Button} from "@radix-ui/themes";

const NewIssuePage = () => {
    return (
        <div className ='max-w-xl space-w-3'>
            <Text>Test Test is this working?!</Text>
            <TextField.Root></TextField.Root>
            <TextArea placeholder="Description" />
            <Button>Submit New Issue</Button>
        </div>

    )
}

export default NewIssuePage