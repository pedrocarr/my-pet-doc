import React, { createContext, useState, useEffect } from 'react';
import { supabase } from '~/lib/supabase';
import { Session } from '@supabase/supabase-js';

type ContextProps = {
  user: null | boolean;
  session: Session | null;
};

const AuthContext = createContext<Partial<ContextProps>>({});

interface AuthContextProps {
  children: React.ReactNode;
}

const AuthProvider = (props: AuthContextProps) => {
  // user null = loading
  const [user, setUser] = useState<null | boolean>(null);
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const response = await supabase.auth.getSession();
        setSession(response.data.session);
        setUser(response.data.session ? true : false);
        const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
          console.log(`Supabase auth event: ${event}`);
          setSession(session);
          setUser(session ? true : false);
        });

        return () => {
          authListener.subscription.unsubscribe();
        };
      } catch (error) {
        console.error(`Error fetching session auth provider`, error)
      }
    };


    fetchSession()
  }, [user]);


  return (
    <AuthContext.Provider
      value={{ user, session }}>
      {props.children}
    </AuthContext.Provider>
  )
};


export { AuthContext, AuthProvider }