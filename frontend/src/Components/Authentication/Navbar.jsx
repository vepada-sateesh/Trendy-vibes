import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AUTH_LOGOUT } from "../../Redux/auth/actionTypes";
import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Portal,
  useToast,
} from "@chakra-ui/react";

const Navbar = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const toast = useToast();
  return (
    <div>
      <div>
        <p>
          <Link to="/signup"></Link>
          {auth.data.isAuthenticated ? (
            <Button
              h="30px"
              w="70px"
              colorScheme={"red"}
              onClick={() => {
                dispatch({ type: AUTH_LOGOUT });
                toast({
                  title: "Logged out successfully",
                  status: "success",
                  duration: 3000,
                  isClosable: true,
                  position: "top",
                });
              }}
            >
              Logout
            </Button>
          ) : (
            <span className="navLogin">
              <Popover>
                <PopoverTrigger>
                  <Button>Login</Button>
                </PopoverTrigger>
                <Portal>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody
                      p={8}
                      _hover={{
                        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                      }}
                    >
                      <Link to="/login">
                        <Button
                          w="80%"
                          borderRadius={"5px"}
                          ml={5}
                          colorScheme="green"
                          _hover={{ bg: "blue" }}
                        >
                          Login
                        </Button>
                      </Link>
                      <br></br>
                      <br></br>
                      <Link to="/signup">
                        <Button
                          borderRadius={"5px"}
                          w="80%"
                          ml={5}
                          colorScheme="blue"
                          _hover={{ bg: "green" }}
                        >
                          Sign Up
                        </Button>
                      </Link>
                    </PopoverBody>
                  </PopoverContent>
                </Portal>
              </Popover>
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export { Navbar };
