'use client';
import React from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import {TextField, Text, TextArea, Button} from "@radix-ui/themes";

const NewIssuePage = () => {
    return (
        <div className ='max-w-xl space-w-3'>
            <Text>Test Test is this working?!</Text>
            <TextField.Root></TextField.Root>
            <SimpleMDE placeholder="Description" />
            <Button>Submit New Issue</Button>
        </div>

    )
}

export default NewIssuePage