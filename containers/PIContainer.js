import React from 'react'
import { Grid, GridItem, SimpleGrid, Input, Image, Text, Center,
    FormControl,
    FormLabel,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Code,
    VStack,
    StackDivider,
    Box
} from '@chakra-ui/react'

const PIContainer = () => {
    const [files, setFiles] = React.useState([])
    const [selectedImage, setSelectedImage] = React.useState('')
    const nodeRef = React.useRef()

    const codes = [
        {
            name: 'state variable',
            code: 'const [files, setFiles] = React.useState([]);\nconst nodeRef = React.useRef();\nconst [selectedImage, setSelectedImage] = React.useState(\'\')'
        },
        {
            name: 'file input',
            code: '<input accept=\'image/*\' type=\'file\' ref={nodeRef} onChange={_handleOnChange} multiple={true} />'
        },
        {
            name: 'action change file input',
            code: 'const _handleOnChange = (evt) => {\nconst fileList = Array.from(evt.currentTarget.files);\nfileList.forEach(function(element) {\nelement.uri = URL.createObjectURL(element);\n});\nsetFiles(fileList);\n}'
        },
        {
            name: 'show mini preview image',
            code: 'files.map((file, index) => (\n<Image key={index} src={file.uri} alt={file.name} onClick={_handleOnClickImage} />\n));'
        },
        {
            name: 'action when selecting an image',
            code: 'const _handleOnClickImage = (evt) => {\nsetSelectedImage(evt.currentTarget.src)\n}'
        },
        {
            name: 'preview selected image',
            code: '<Image src={selectedImage} />'
        }
    ]

    const _handleOnChange = (evt) => {
        const fileList = Array.from(evt.currentTarget.files)
        fileList.forEach(function(element) {
            element.uri = URL.createObjectURL(element)
        })
        setFiles(fileList)
    }

    const _handleOnClickImage = (evt) => {
        setSelectedImage(evt.currentTarget.src)
    }

    return (
        <Grid templateColumns="1fr 3fr" columnGap={4}>
            <GridItem overflowY="auto" height="100%" overflowY="auto">

                <Tabs variant='enclosed'>
                    <TabList>
                        <Tab>DEMO</Tab>
                        <Tab>CODE</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <FormControl>
                                <FormLabel htmlFor="files">SELECT FILES</FormLabel>
                                <Input
                                    id="files"
                                    accept="image/*"
                                    type="file"
                                    ref={nodeRef}
                                    variant="filled"
                                    onChange={_handleOnChange}
                                    multiple
                                    mb={3}
                                />
                            </FormControl>

                            <Text>MINI PREVIEW</Text>
                            <SimpleGrid columns={3} templateRows="max-content" spacing={2} height="40vh" overflowY="auto" borderWidth={1} borderRadius={4} p={2}>
                                {
                                    files.map((file, index) => (
                                        <Image
                                            key={index}
                                            src={file.uri}
                                            alt={file.name}
                                            width="100%"
                                            height="100px"
                                            onClick={_handleOnClickImage}
                                            border="solid 1px #d8d8d8"
                                            borderRadius={4}
                                            cursor="pointer"
                                        />
                                    ))
                                }
                            </SimpleGrid>
                        </TabPanel>

                        <TabPanel>

                            <VStack
                                divider={<StackDivider borderColor='gray.200' />}
                                spacing={4}
                                align='stretch'
                            >
                                {
                                    codes.map((code, index) => (
                                        <Box key={index}>
                                            {code.name}
                                            <Code
                                                colorScheme="red"
                                                whiteSpace="pre-line"
                                                children={code.code}
                                            />
                                        </Box>
                                    ))
                                }
                            </VStack>
                        </TabPanel>
                    </TabPanels>
                </Tabs>

            </GridItem>
            <GridItem>
                <Text fontSize="2xl">PREVIEW</Text>
                <Center h="calc(100vh - 116px)" overflow="auto" borderWidth={1} borderRadius={4}>
                    <Image
                        src={selectedImage}
                    />
                </Center>
            </GridItem>
        </Grid>
    )
}

export default PIContainer