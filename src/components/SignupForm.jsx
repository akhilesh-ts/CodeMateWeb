import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    password: "",
    title:""
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        { formData },
        { withCredentials: true }
      );
      console.log(res.data);
      if (res.status === 201) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }

    console.log(formData);
  };
  return (
    <div>
      <Card className="border-[#5E5EED33] bg-[#1E2128FF]">
        <CardHeader className="text-center ">
          <CardTitle className="text-xl text-[#FAFAFBFF] font-grotesk">
            Create CodeMate account{" "}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name" className="text-[#FAFAFBFF]">
                  Name
                </FieldLabel>
                <Input
                  className="bg-[#32374333] border-[#323743FF] border-solid rounded-[10px] text-[#DEE1E6FF]"
                  id="name"
                  type="text"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      firstName: e.target.value,
                    }))
                  }
                  placeholder="John Doe"
                  required
                />
              </Field>
              <Field>
                <FieldLabel className="text-[#FAFAFBFF]" htmlFor="email">
                  Email
                </FieldLabel>
                <Input
                  className="bg-[#32374333] border-[#323743FF] border-solid rounded-[10px] text-[#DEE1E6FF]"
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                  placeholder="m@example.com"
                  required
                />
              </Field>
              <Field>
                <FieldLabel className="text-[#FAFAFBFF]" htmlFor="email">
                  Title
                </FieldLabel>
                <Input
                  className="bg-[#32374333] border-[#323743FF] border-solid rounded-[10px] text-[#DEE1E6FF]"
                  
                  type="text"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      title: e.target.value,
                    }))
                  }
                  placeholder="mern stack devloper"
                  required
                />
              </Field>
              <Field>
                <Field className="grid grid-cols-2 gap-4">
                  <Field>
                    <FieldLabel className="text-[#FAFAFBFF]" htmlFor="password">
                      Password
                    </FieldLabel>
                    <Input
                      className="bg-[#32374333] border-[#323743FF] border-solid rounded-[10px] text-[#DEE1E6FF]"
                      value={formData.password}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          password: e.target.value,
                        }))
                      }
                      id="password"
                      type="password"
                      required
                    />
                  </Field>
                  <Field>
                    <FieldLabel
                      className="text-[#FAFAFBFF]"
                      htmlFor="confirm-password"
                    >
                      Confirm Password
                    </FieldLabel>
                    <Input
                      className="bg-[#32374333] border-[#323743FF] border-solid rounded-[10px] text-[#DEE1E6FF]"
                      id="confirm-password"
                      type="password"
                      required
                    />
                  </Field>
                </Field>
              </Field>
              <Field>
                <Button
                  type="submit"
                  className=" py-5  bg-[#5E5EEDFF] text-[#DEE1E6FF] hover:bg-[#5E5EEDFF] cursor-pointer"
                >
                  Create Account
                </Button>
                <FieldDescription className="text-center">
                  Already have an account?{" "}
                  <Link
                    className="text-[#5E5EEDFF] hover:text-[#5E5EEDFF] cursor-pointer"
                    to="/login"
                  >
                    Sign in
                  </Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignupForm;
