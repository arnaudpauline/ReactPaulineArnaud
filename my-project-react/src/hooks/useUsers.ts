import { useState } from "react";
import { User } from "../models/User";
import { useMountEffect } from "./useMountEffect";
import { getUsers } from "../services/api";

export const useUsers = () => {
    const [loading, setLoading ] = useState(true);
    const [users, setUsers ] = useState<User[]>([]);
    
    useMountEffect(() => {
        (async () => {
            const nextUsers = await getUsers();
            setUsers(nextUsers);
            setLoading(false);
        })()
    })
    return { users, loading };
}