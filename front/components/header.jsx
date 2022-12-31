import {
   Link,
   Box,
   Text,
   Grid,
   Button,
   Drawer,
   DrawerBody,
   DrawerHeader,
   DrawerOverlay,
   DrawerContent,
   useDisclosure,
} from '@chakra-ui/react'

export const Header = () => 
{
   const { isOpen, onOpen, onClose } = useDisclosure()
   return (
      <Box
         bg="#000"
         opacity="0.9"
         color="#ffffff"
         h={16}
         display="flex"
         justifyContent="center"
         alignItems="center"
         w="100%"
         zIndex={2}
      >
         <Text fontSize={44} fontFamily="Roboto" fontWeight="bold">
            milalaの自己紹介ブログ
         </Text>
         <Grid templateColumns="repeat(3, 1fr)" gap={6} ml={14} mr={14}>
            <Text
               fontSize="3xl"
               fontFamily="Rajdhani"
               transition="all .0.2s"
               _hover={{ textDecoration: "underline 1px" }}
            >
               <a href="#About">About</a>
            </Text>
            <Text
               fontSize="3xl"
               fontFamily="Rajdhani"
               _hover={{ textDecoration: "underline 1px" }}
            >
               <a href="#Works">Profile</a>
            </Text>
            <Text
               fontSize="3xl"
               fontFamily="Rajdhani"
               _hover={{ textDecoration: "underline 1px" }}
            >
               <a href="#Images">Favorites</a>
            </Text>
         </Grid>

         <Box position="absolute" right={5}>
            <Button colorScheme='black' shadow="md" onClick={onOpen}>Menu</Button>
            <Drawer colorScheme='black' placement='right' onClose={onClose} isOpen={isOpen}>
               <DrawerOverlay />
               <DrawerContent>
                  <DrawerHeader borderBottomWidth='1px'>Menu</DrawerHeader>
                  <DrawerBody>
                     <p>未来のmilaに期待</p>
                     <br />
                     <Link href='https://mitsuki8854.github.io/mila/' isExternal> 旧サイト </Link>
                  </DrawerBody>
               </DrawerContent>
            </Drawer>
         </Box>
      </Box>
   );
};
