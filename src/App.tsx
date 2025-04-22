import "./App.css";
import { NavigationMenu, Popover, Form } from "radix-ui";
import { ReactElement, useState } from "react";

const NavItemLink = (props: { text: string }) => {
    const { text } = props;
    return <a className="mr-4 text-[12px]">{text}</a>;
};

const NavItemDropdownContent = () => {
    return (
        <NavigationMenu.Content className="fixed border-1 text-[11px] p-2 ml-[-20px]">
            <NavigationMenu.Content>
                <a>example link</a>
            </NavigationMenu.Content>{" "}
            <NavigationMenu.Content>
                <a>example link</a>
            </NavigationMenu.Content>{" "}
            <NavigationMenu.Content>
                <a>example link</a>
            </NavigationMenu.Content>{" "}
            <NavigationMenu.Content>
                <a>example link</a>
            </NavigationMenu.Content>
        </NavigationMenu.Content>
    );
};

const NavItemSearchContent = () => {
    const [selectedGender, setSelectedGender] = useState("menswear");

    return (
        <Popover.Content className="fixed border-1 text-[11px] p-2 ml-[-40px]">
            <Form.Root>
              <div className="flex w-60 mb-3">
                <Form.Field className="cursor-pointer mr-2" onChange={() => setSelectedGender("menswear")}  name="menswear">
                    <Form.Label
                        className={
                            selectedGender === "menswear" ? "underline" : ""
                        }
                    >
                        menswear
                    </Form.Label>
                    <Form.Control asChild>
                        <input className="hidden" type="radio" name="gender" value="menswear" />
                    </Form.Control>
                </Form.Field>
                <Form.Field className="cursor-pointer mr-3"  onChange={() => setSelectedGender("womenswear")} name="womenswear">
                    <Form.Label
                        className={
                            selectedGender === "womenswear" ? "underline" : ""
                        }
                    >
                        womenswear
                    </Form.Label>
                    <Form.Control asChild>
                        <input className="hidden"  type="radio" name="gender" value="womenswear" />
                    </Form.Control>
                </Form.Field>
                <Form.Field className="cursor-pointer mr-2" onChange={() => setSelectedGender("everything else")} name="everything else">
                    <Form.Label
                        className={
                            selectedGender === "everything else" ? "underline" : ""
                        }
                    >
                        everything else
                    </Form.Label>
                    <Form.Control asChild>
                        <input
                        className="hidden" 
                            type="radio"
                            name="gender"
                            value="everything else"
                        />
                    </Form.Control>
                </Form.Field>
                </div>
                <Form.Field name="search">
                    <Form.Control asChild className="border-1">
                        <input className="Input p-1 w-60" type="search" placeholder={`search ${selectedGender}`} />
                    </Form.Control>
                </Form.Field>
            </Form.Root>
        </Popover.Content>
    );
};

const NavItemDropdown = (props: { text: string; children: ReactElement }) => {
    const { text, children } = props;
    return (
        <NavigationMenu.Trigger className="">
            <a className="mr-4 text-[12px]">{text}</a> {children}
        </NavigationMenu.Trigger>
    );
};

const NavItemPopover = (props: { text: string; children: ReactElement }) => {
    const { text, children } = props;
    return (
        <Popover.Root>
            <Popover.Trigger>
                <a className="mr-4 text-[12px]">{text}</a>
            </Popover.Trigger>
            {children}
        </Popover.Root>
    );
};

function App() {
    return (
        <>
            <NavigationMenu.Root className="fixed top-5 z-10 flex w-screen justify-between content-center pl-4 pr-4">
                <NavigationMenu.List className="flex">
                    <NavigationMenu.Item>
                        <NavItemLink text="menswear" />
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                        <NavItemLink text="womenswear" />
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                        <NavItemLink text="everything else" />
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                        <NavItemLink text="sale" />
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                        <NavItemPopover text="search">
                            <NavItemSearchContent />
                        </NavItemPopover>
                    </NavigationMenu.Item>
                </NavigationMenu.List>
                <h2 className="text-[34px] fixed left-[46%] top-2">SSENSE</h2>
                <NavigationMenu.List className="flex ">
                    <NavigationMenu.Item>
                        <NavItemDropdown text="english">
                            <NavItemDropdownContent />
                        </NavItemDropdown>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                        <NavItemDropdown text="account">
                            <NavItemDropdownContent />
                        </NavItemDropdown>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                        <NavItemLink text="wishlist" />
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                        <NavItemLink text="bag(0)" />
                    </NavigationMenu.Item>
                    <NavigationMenu.Item></NavigationMenu.Item>
                </NavigationMenu.List>
            </NavigationMenu.Root>
        </>
    );
}

export default App;
